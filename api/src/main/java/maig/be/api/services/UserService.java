package maig.be.api.services;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import jakarta.annotation.PostConstruct;
import maig.be.api.dto.AuthenticatedUser;
import maig.be.api.dto.Credentials;
import maig.be.api.dto.LoginCredentialDTO;
import maig.be.api.models.User;
import maig.be.api.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.StreamSupport;

@Service
public class UserService {

    private static final long JWT_LIFETIME = 24 * 60 * 60 * 1000; // 24h (duration in ms)

    @Value("${JWT_SECRET}")
    private String jwtSecret;
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private Algorithm jwtAlgorithm;

    public UserService(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostConstruct
    public void init() {
        if(jwtSecret == null) {
            jwtSecret = System.getProperty("JWT_SECRET");
        }

        if(jwtSecret == null) {
            throw new IllegalStateException("JWT_SECRET est manquant !");
        }

        this.jwtAlgorithm = Algorithm.HMAC256(jwtSecret);
    }

    public void register(Credentials credentials) {
        User user = buildUser(credentials);
        userRepository.save(user);
    }

    public AuthenticatedUser login(LoginCredentialDTO credentials) {
        if(credentials.email() == null || credentials.password() == null) {
            return null;
        }

        User user = userRepository.findByEmail(credentials.email());

        if(user == null || passwordEncoder.matches(credentials.password(), user.getPassword())) {
            return null;
        }

        return createJwtToken(credentials.email(), user.getId(), user.getRole());
    }

    private AuthenticatedUser createJwtToken(String email, long id, String role) {
        String token = JWT.create()
                .withIssuer("auth0")
                .withClaim("email", email)
                .withIssuedAt(new Date())
                .withExpiresAt(new Date(System.currentTimeMillis() + JWT_LIFETIME))
                .sign(jwtAlgorithm);

        return new AuthenticatedUser(email, token, id, role);
    }

    public String verifyJwtToken(String token) {
        try {
            return JWT.require(jwtAlgorithm)
                    .build()
                    .verify(token)
                    .getClaim("email")
                    .asString();
        } catch (Exception e) {
            return null;
        }
    }

    private User buildUser(Credentials credentials) {
        User user = new User();
        user.setEmail(credentials.email());
        user.setPassword(credentials.password());
        user.setFirstName(credentials.firstName());
        user.setLastName(credentials.lastName());
        user.setRole("USER");
        user.setCreationDate(LocalDateTime.now());
        return user;
    }

    public List<User> getAllUsers() {
        return StreamSupport.stream(userRepository.findAll().spliterator(), false).toList();
    }

    public List<User> getUsersByRole(String role) {
        return userRepository.findByRole(role);
    }

    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User findByFirstName(String firstName) {
        return userRepository.findByFirstName(firstName);
    }

    public User findByLastName(String lastName) {
        return userRepository.findByLastName(lastName);
    }

    public User updateRole(Long id, String role) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Utilisateur introuvable"));

        if(!"USER".equals(role) && !"ADMIN".equals(role)){
            throw new IllegalArgumentException("Rôle introuvable");
        }

        user.setRole(role);
        return userRepository.save(user);
    }

    public User save(User user) {
        return userRepository.save(user);
    }


}

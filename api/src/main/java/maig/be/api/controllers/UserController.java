package maig.be.api.controllers;

import jakarta.validation.Valid;
import maig.be.api.dto.AuthenticatedUser;
import maig.be.api.dto.Credentials;
import maig.be.api.dto.LoginCredentialDTO;
import maig.be.api.models.User;
import maig.be.api.services.UserService;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/auths")
public class UserController {

    private record AuthUserResolution(User user, ResponseEntity<Map<String, String>> errorResponse) {}

    private final UserService userService;
    private final BCryptPasswordEncoder passwordEncoder;

    public UserController(
            UserService userService,
            BCryptPasswordEncoder passwordEncoder
    ) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/register")
    @PreAuthorize("isAnonymous()")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Map<String, String>> register(@Valid @RequestBody Credentials credentials) {

        userService.register(credentials);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(Map.of("message", "User registered successfully"));
    }

    @PostMapping("/login")
    @PreAuthorize("isAnonymous()")
    public AuthenticatedUser login(@Valid @RequestBody LoginCredentialDTO credentials) {
        AuthenticatedUser authenticatedUser = userService.login(credentials);

        if(authenticatedUser == null) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
        }

        return authenticatedUser;
    }

    @GetMapping("/{id}")
    @PreAuthorize("isAuthenticated()")
    public Credentials getUserProfile(@PathVariable Long id) {
        User user = userService.findById(id);
        if(user == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
        } // le optional pose problème

        return new Credentials(
                user.getEmail(),
                user.getPassword(),
                user.getFirstName(),
                user.getLastName(),
                user.getRole(),
                user.getCreationDate()
        );
    }

    @GetMapping("/users/setRole/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<User> setAdmin(@PathVariable("id") long userId) {
        User user = userService.findById(userId);

        if(user == null) {
            return ResponseEntity.notFound().build();
        }

        User updatedUser = userService.setRoleTo(user);
        return ResponseEntity.ok(updatedUser);
    }
}

package maig.be.api.repositories;

import maig.be.api.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    User findByEmail(String email);

    User findByFirstName(String firstName);

    User findByLastName(String lastName);

    List<User> findByRole(String role);
}

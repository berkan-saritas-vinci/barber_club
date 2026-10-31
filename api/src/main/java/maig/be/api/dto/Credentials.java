package maig.be.api.dto;

import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

public record Credentials(

        @NotNull
        String email,
        @NotNull
        String password,
        @NotNull
        String firstName,
        @NotNull
        String lastName,
        @NotNull
        String role,
        @NotNull
        LocalDateTime creationDate
) {
    public String email() {
        return email;
    }

    public String password() {
        return password;
    }

    public String firstName() {
        return firstName;
    }

    public String lastName() {
        return lastName;
    }

    public String role() {
        return role;
    }

    public LocalDateTime creationDate() {
        return creationDate;
    }
}

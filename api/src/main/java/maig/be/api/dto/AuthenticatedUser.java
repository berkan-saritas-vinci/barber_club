package maig.be.api.dto;

import jakarta.validation.constraints.NotBlank;

public record AuthenticatedUser (

        @NotBlank
        String email,
        @NotBlank
        String token,
        long id,
        String role
) {
    public String email() {
        return email;
    }

    public String token() {
        return token;
    }

    public long id() {
        return id;
    }
}

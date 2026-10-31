package maig.be.api.dto;

import jakarta.validation.constraints.NotNull;

public record LoginCredentialDTO (

        @NotNull
        String email,
        @NotNull
        String password
) {

    public String email() {
        return email;
    }

    public String password() {
        return password;
    }
}

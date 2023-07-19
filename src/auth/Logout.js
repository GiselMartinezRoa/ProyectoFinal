import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Logout = () => {
    const { logout } = useAuth0();

    return (
        <div class="d-flex justify-content-center" role="group" aria-label="Basic example">
            <div>
                <button type="button" class="btn btn-outline-info" onClick={() => logout({ returnTo: window.location.origin })}>
                    Cerrar sesión
                </button>
            </div>
        </div >
    );
};



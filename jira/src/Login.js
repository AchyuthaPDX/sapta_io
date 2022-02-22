import React from "react"
import { Container } from "react-bootstrap"

const AUTH_URL =
"https://auth.atlassian.com/authorize?audience=api.atlassian.com&client_id=QEPbDfbzRgDNS2P5nROTNKBenrdNWLRA&scope=read%3Ajira-user%20read%3Ajira-work%20write%3Ajira-work%20manage%3Ajira-project&redirect_uri=http%3A%2F%2Flocalhost%3A3000&state=${YOUR_USER_BOUND_VALUE}&response_type=code&prompt=consent"

export default function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Jira Tickets
      </a>
    </Container>
  )
}
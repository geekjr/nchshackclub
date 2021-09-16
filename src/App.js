import theme from "@hackclub/theme";
import { ThemeProvider, Container, Button, Text } from "theme-ui";
import ColorSwitcher from "./color-switcher";
//import "./App.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ColorSwitcher />
        <Container>
          <Text variant="title">New Canaan High School Hack Club</Text>
        </Container>
        <Container
          sx={{
            marginTop: "1rem",
          }}
        >
          <Text variant="subtitle">
            Meetings every Thursday after school in Room XXX.
          </Text>
        </Container>
        <Container
          sx={{
            marginTop: "1rem",
          }}
        >
          <Text
            variant="headline"
            sx={{
              marginTop: "1rem",
              fontFamily: "futura",
            }}
          >
            Learning to code is like gaining a superpower
          </Text>
          <Text variant="subtitle">
            {" "}
            — turning you from a consumer of technology into a creator. Hack
            Club is a place where anyone can come to learn coding. We will cover
            everything, from web development to games to AI and everything in
            between. No prior coding experience required!
          </Text>
        </Container>
        <Container
          sx={{
            marginTop: "1rem",
          }}
        >
          <Text variant="subtitle">Important links:</Text>
        </Container>
        <Container
          sx={{
            marginTop: "1rem",
            display: "grid",
            gridGap: 4,
          }}
        >
          <a
            href="https://workshops.hackclub.com/"
            style={{ textDecoration: "none" }}
          >
            <Button>Workshops</Button>
          </a>{" "}
          <a
            href="https://forms.gle/HhaGrF8WiQwHGF9E9"
            style={{ textDecoration: "none" }}
          >
            <Button>Workshop requests</Button>
          </a>{" "}
          <a href="https://replit.com/" style={{ textDecoration: "none" }}>
            <Button>Replit</Button>
          </a>
          <a
            href="https://colab.research.google.com/"
            style={{ textDecoration: "none" }}
          >
            <Button>Google Colab</Button>
          </a>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;

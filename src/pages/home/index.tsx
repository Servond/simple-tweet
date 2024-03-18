import { Box, Container } from "@chakra-ui/react";
import TweetSection from "./components/tweetSection";
import TweetListSection from "./components/tweetListSection";

function Home() {
  return (
    <Box
      sx={{
        marginTop: "80px",
      }}
    >
      <Container>
        <TweetSection />
        <hr />
        <TweetListSection />
      </Container>
    </Box>
  );
}

export default Home;

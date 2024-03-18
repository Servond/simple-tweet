import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import { Box, Text, Button } from "@chakra-ui/react";
import DBInstance from "../../../../api/axios-instance";

interface ITweet {
  userId: number;
  tweet: string;
  id: number;
  userName: string;
}

function TweetListSection() {
  const [tweets, setTweets] = useState<ITweet[]>([]);
  const { user } = useAppSelector((state) => state.auth);

  const fetchTweets = async () => {
    const { data } = await DBInstance.get("/tweets");
    setTweets(data);
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <Box>
      <Box sx={{ marginTop: "5px", padding: "5px" }}>
        {tweets?.map((tweet) => {
          return (
            <Box
              sx={{
                border: "1px solid grey",
                borderRadius: "6px",
                marginTop: "15px",
                padding: "10px",
              }}
            >
              <Text fontSize="xs">
                Tweet By {user?.name == tweet.userName ? "you" : tweet.userName}
              </Text>
              <hr />
              <Text
                sx={{
                  marginTop: "5px",
                }}
              >
                {tweet.tweet}
              </Text>
            </Box>
          );
        })}
      </Box>
      <Box display="flex" justifyContent="center">
        <Button size="sm" sx={{ marginTop: "20px" }} onClick={fetchTweets}>
          Refresh
        </Button>
      </Box>
    </Box>
  );
}

export default TweetListSection;

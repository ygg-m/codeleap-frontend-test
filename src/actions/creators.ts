import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the async action creator
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(
    "https://dev.codeleap.co.uk/careers/?format=json"
  );
  return response.data.results;
});

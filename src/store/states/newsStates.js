import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name: 'news',
    initialState: {
      items: [],
      displayedCount: 6,
      apiKey: 'pub_199701eaa09ae57317b3151a023e45714dd22',
      searchQuery: 'online%20payment',
    },
    reducers: {
      setNewsItems: (state, action) => {
        state.items = action.payload;
      },
      showMoreNews: (state) => {
        state.displayedCount += 6;
      }
    }
  });
  
  export const { setNewsItems, showMoreNews } = newsSlice.actions;
  export default newsSlice.reducer;
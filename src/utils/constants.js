export const LOGO = "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg";

export const USER_PHOTO =  "https://occ-0-1555-1556.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const NETFLIX_BACKGROUND = "https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/8a9a30f9-839d-4a8c-8752-f2657a7eb499/DE-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_fbdb936e-26f2-4c3f-b82a-920baf1e85d8_medium.jpg";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_TBDM_AUTH
    }
  };

  export const MOVIE_IMAGE_URL = "https://image.tmdb.org/t/p/original/";

  export const LANG_OPTIONS = [
    {id: "en", name: "English"},
    {id: "hindi", name: "Hindi"}
  ];

  export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
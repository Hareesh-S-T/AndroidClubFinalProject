# Android Club Final Project

## Random Application because I ran out of ideas
- For context, I scrapped my previous project the morning of submission and haven't been able to make anything since then. Hence the delay as well, apologies!

### Features
- Fully fleshed out auth flow(registration(with email verification), sign up, forgot password, resending email verification code) with hashed password storing, and auth token implementation (built backend)
- Home feed that shows daily global news pulled from NYT
- Search feed that enables article searching from NYT
- Incomplete profile page that stores "quick notes" that can be read and accesed from any device using the same account(stored on db along with user info)
- Profile page editing that lets user change user information

### Screenshots

<img src="https://user-images.githubusercontent.com/95037274/170387803-a9327ffd-98b6-49c6-9954-7a8728deef22.png" /> \

<img src="https://user-images.githubusercontent.com/95037274/170387859-7b2b2bdd-9e36-4eeb-aa62-f944a5739e0b.png" /> \

<img src="https://user-images.githubusercontent.com/95037274/170387882-6d936fe8-2fb0-4b2d-8e0a-ee065464ffd2.png" /> \

<img src="https://user-images.githubusercontent.com/95037274/170387907-6ba54b58-696f-45eb-8e96-cf2cd7534bb7.png" /> \

<img src="https://user-images.githubusercontent.com/95037274/170387959-03323e38-f55e-463e-9525-3e5425d68714.png" /> \

<img src="https://user-images.githubusercontent.com/95037274/170388018-909a0574-c749-4250-8c02-60e3b78d20b8.png" /> \

<img src="https://user-images.githubusercontent.com/95037274/170388050-88640d4a-7bb0-4e27-a353-0b5e389e2237.png" /> \

<img src="https://user-images.githubusercontent.com/95037274/170388081-1d04cf5d-9e42-4d01-92b6-14b82ce8bc2d.png" /> \

<img src="https://user-images.githubusercontent.com/95037274/170388139-2f37a3e9-e14c-4ea4-a8b1-aa9197458507.png" /> \

<img src="https://user-images.githubusercontent.com/95037274/170388190-d2fe88e3-6501-462d-a277-2e21fd396da3.png" /> \

### Video (Watch on mute, I typed pretty aggressively for some reason)(Includes forgot password and stuff)
https://drive.google.com/file/d/1b9UdY8NBUkxXHsJAGdWi30izihNnCfNl/view?usp=sharing

### Contributions
- Hareesh S - Everything(Sadly)

### Article write up(because I can't figure out how to post on medium this early in the morning)
Well, things did not go according to plan for this project. Having to scrap my previous project completely the day of submission because I could not figure a bug out (which I ended up fixing just a few days later) definitely was not ideal, but a learning lesson, maybe(hopefully). Having no idea for an app and in constant panic, I set out to do what I could do best, completely remove the aspect of creativity and work on the most mundane task; In this case, it was user authentication. To be completely honest, I’m somewhat glad I took this approach, this way I learned a lot more about backend development in a very short period of time and I’m actually happy with how the authentication flow turned out (at one stage I was mentally prepared to submit that alone as my final project, no joke). Few things I’m still not satisfied with though, but I have remedies for them the next time I tackle a similar auth flow, so I guess it worked out! As for the main part of the application, as one can see, its complete bullsh*t, and I’ll gladly accept that judgement. I legitimately could not think of anything to do, and I ended up rushing through an articles search, home news and “profile” screen. Profile screen was so empty (because the app didn’t really need a profile) that I ended up adding a quick notes section below it and a bit of profile editing capabilities out of desperation. I’m hoping its sufficient, but I have no clue at this point, and I can’t keep delaying submission, so I’ve decided to draw the line and submit it as is. My main takeaways I’d say ate 1) Having some goal, a plan or idea is CRUCIAL. You really can’t do much until you’ve laid everything out, and its especially applicable to development. 2) It’s very easy to get caught up in minute issues or bugs and wasting way too much time on it before you realise you can come back to it later (such as font sizing, colours, the keyboard hiding text when its open etc.) Quirks aside, rushing this app build was fun in its own way, and I got to explore quite a few features I hadn’t before, so all in all it’s been great! (Still praying I don’t fail the club because of this though! *Insert dead emoji*)


Ohh and also, user profile pictures are saved as links. Ideally Images would be pushed to aws s3 or some cloud bucket and the url would be referenced to grab the profile picture but I deleted my aws account and didn't want to set it up again. Currently the db defaults the profile picture link to a blank user image(which is also a url from google)

### References
https://dribbble.com/shots/10677452-Color-Library-for-Dark-and-Light-Mode

https://dribbble.com/shots/15564279-Transporter-App-Login

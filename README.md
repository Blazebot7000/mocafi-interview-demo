# MocafiInterviewDemo

This project was created by Collin Graf as a part of an interview for the company MoCaFi. 

This application is being hosted on Vercel, accessible here: (Will add link once deployment is tested)

## Code Showcase

This codebase is written using Angular 19. 

You will notice a lack of .css/.scss/.sass files in this project, as I have used Tailwinds to manage the application styles over the more traditional approach of using stylesheets.

This codebase also utilizes many core Angular concepts and libraries, such as ngrx state management, Angular Material components, Angular Routing, and both Angular Template-driven forms and Angular Reactive Forms. 

## Project Structure

This project is broken down into 2 main folders. First is the components folder which houses all of my application's components. This folder is broken down further between components that act as a page and components that are shared for use across multiple pages. Second is the store folder which houses the application's state, handles all logic related to API interactions, and holds any custom types or interfaces.

## Misc

Rolling auth was outside of the scope of this project. While the application does track whether the user is signed in or not, there is no server supporting this. So long as you enter the email and password displayed on the login page, you will be logged into the application. 

The https://gorest.co.in/ API requires an API key in order to create or edit users. This API key is currently hardcoded for ease-of-use by the reviewer of this code. 

I have not added unit tests or regression tests to this project to give myself more time to focus on showcasing other expertise. I can add those if desired at a later time.

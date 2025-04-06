# MocafiInterviewDemo

This project was created by Collin Graf as a part of an interview for the company MoCaFi. 

This application is being hosted on Vercel, accessible here: https://mocafi-interview-demo.vercel.app/

## Code Showcase

This codebase is written using Angular 19. 

You will notice a lack of stylesheets in this project's components, as I have opted to use Tailwinds to manage the application's components' styles.

This codebase also utilizes many core Angular concepts and libraries, such as ngrx state management, Angular Material components, Angular routing, and both Angular template-driven forms and Angular reactive forms. 

## Project Structure

This project is broken down into 2 main folders. First is the components folder which houses all the application's components. This folder is broken down further between components that act as a page and components that are shared or reusable. Second is the store folder which houses the application's state, handles all logic related to API interactions, and holds any custom types or interfaces.

## Misc

Rolling auth was outside of the scope of this project. While the application does track whether the user is signed in or not, there is no server supporting this. So long as you enter the email and password displayed on the login page, you will be logged into the application. 

The https://gorest.co.in/ API requires an API key in order to create or edit users. This API key is currently hardcoded for ease-of-use by the reviewer of this code. 

Unit tests and regression tests I believed were outside the scope of this project, but can be added if desired.

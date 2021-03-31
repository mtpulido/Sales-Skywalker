# Sales-Skywalker

## Overview

**Sales Skywalker**  an app built to mimic a company specific version of sales force. It helps sales reps see their key performance indicators, their performance to quota, and keep track of their prospects and clients for meeting organizaiton and easy to do items.


<br>

## MVP



The **Sales Skywalker** MVP 
<br>

### Goals

- Full Crud frontend and backend
- easy usability to drive sales rep behavior within the app
- include analytics dependant on user data
- implement a self built graph.

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | react |
|   React Router   |for navigation|
| axios | for api calls |
|     rails      | for backend full crud |
|  postgresql |database |
|  jwt |for user  |
|  bcrypt |user security |

<br>

### Client (Front End)

#### Wireframes

![All Wire Frames](https://i.imgur.com/YTVFgfg.png)


#### Component Tree


[Component Tree Sample](https://whimsical.com/9ZzTsNyojbSYdhjP9iDJcE)

#### Component Architecture
 

``` structure

src
|__ containers/
      |__ MainContainer
|__ screens/
      |__ landing page
      |__ dashboard
      |__ prospects
      |__ clients
      |__ details
      |__ add
      |__ edit
|__ components/
      |__ KPIs
      |__ Graph
      |__ meetings
      |__ ToDos
      |__ loginForm
      |__ signupForm
      
|__ services/
      |__ api-config
      |__ auth
      |__ users
      |__ businesses
      |__ meetings
|__ helpers/
    |__ sort
    |__ filter 
|__ layout/

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| layout   |    H     |     2 hrs      |          |       |
| main container |    H     |     3 hrs      |          |          |
| api config    |    H     |     2 hrs      |          |       |
| rails scaffold |    H     |     1 hrs      |          |          |
| custom routes    |    H     |     2 hrs      |          |       |
| edit controller scaffolds |    H     |     2 hrs      |          |          |
| seed data   |    H     |     2 hrs      |          |       |
| frontend api functions |    H     |     2 hrs      |          |          |
| auth frontend    |    H     |     4 hrs      |          |       |
| structure props and state |    H     |     3 hrs      |          |          |
| grid/flexbox   |    H     |     5 hrs      |          |       |
| basic styling/spacing |    H     |     6 hrs      |          |          |
| graph   |    H     |     4 hrs      |          |       |
| TOTAL               |          |     38 hrs      |          |         |


<br>

### Server (Back End)

#### ERD Model

[ERD Sample](https://drive.google.com/file/d/1rvIkS493J_1kDnf7lPV1AuE-KlgLSNLA/view?usp=sharing)
<br>

***

## Post-MVP

-calendar view for each month and each week 
-concept of sales manager
-concept of multiple companies in the system
-

***

## Code Showcase

## Code Issues & Resolutions


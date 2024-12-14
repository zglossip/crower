# thrive (WIP)

_thrive_ is an upcoming mobile and web application that will keep track of daily schedules and todo lists.
</br>
</br>
Eventually, for the first release, this will be an Android app frontend built with Ionic/Cordova and Vue alongside a API
provided by a Java WAR. Both will have to be manually deployed.
</br>
</br>
This application is intended for my own use, with functionality that is specific to my own needs. However, people can
feel free to take this code and use it as they wish. I just can't necessarily garuntee that all functionality provided
as-is will be useful to anyone outside of myself.
</br>
</br>
There will most likely be further updates in the future, which I will document below.

## Frameworks Used

* Spring Boot
* GraphQL
* Ionic/Cordova
* Vue

## How to run

_thrive_ is run as a WAR file. It requires a `connection.properties` file in `/src/main/resources/` with Spring Boot
database connection properties. For more information on these properties, refer to the `spring.datasource.*` properties
detailed [here](https://docs.spring.io/spring-boot/appendix/application-properties/index.html#appendix.application-properties.data).
</br>
</br>
For reference, I include the following for a Postgres server:

* spring.datasource.url
* spring.datasource.username
* spring.datasource.password
* spring.datasource.driver-class-name

Once the WAR is running, you can navigate the API by going to `/graphiql` and following the instructions provided by the
GraphQL UI.

## Releases

N/A

## Upcoming Releases

### 1.0

* Frontend: Android app
* Backend: GraphQL API WAR
* Daily schedule keeper

### 1.1

* TODO list
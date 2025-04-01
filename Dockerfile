FROM openjdk:17
COPY /backend/ecommerce/target/ecommerce-0.0.1-SNAPSHOT.jar /app/ecommerce-0.0.1-SNAPSHOT.jar
WORKDIR /app
CMD ["java", "-jar", "ecommerce-0.0.1-SNAPSHOT.jar"]

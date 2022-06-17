// ANTES
public class Event {

    eventLocationVenue: String
    eventLocationCity: String;
    eventLocationState: String;
    eventLocationCapacity: number;

    printLocationInfo(): void {
        console.log("The event is at " + eventLocationVenue + " in " + eventLocationCity + ", " + eventLocationState + ". The venus has a maximum capacity of " + eventLocationCapacity + " people");
    }

    speakersNames: String[];
    speakersProfessions: String[];


    printSpeakerGreeting(speakerName: String, speakerProfession: String): void {
        console.log(speakerName + " the " + speakerProfession + " says hello!");
    }

    printAllSpeakerGreetings(speakersNames: String[], speakersProfessions: String[]) {
        for(let i = 0; i < speakersNames.length; i++) {
            printSpeakerGreeting(speakersNames[i], speakersProfessions[i]);
        }
    }
}


// DESPUÉS

public class Event {

    location: Venue;
    speakers: Speaker[];

    printLocationInfo(): void {
        console.log("The event is at " + location.name + " in " + location.city + ", " + 						location.state + ". The venus has a maximum capacity of " + location.capacity + " people");
    }

    printAllSpeakerGreetings(speakers: Speaker[]) {
        speakers.forEach(speaker => speaker.printGreeting());
    }

}

public class Venue {
    name: String
    city: String;
    state: String;
    capacity: number;
}

public class Speaker {
    name: String;
    profession: String;

    printGreeting(): void {
        console.log(this.speakerName + " the " + this.speakerProfession + " says hello!");
    }
}
// ANTES

class Review {

    hotelAmenities: Amenity[];

    getHotelAmenities() {
        this.hotelAmenities = HotelEntity.getHotelData;
    }

    getAmenities() {
        return this.hotelAmenities;
    }
}

class HotelEntity {

    hotelData: Amenity[];

    getHotelData(): Amenity[] {
        this.hotelData = Hotel.getAmenities;
    }

    getData() {
        return this.hotelData;
    }
}


class Hotel {

    amenities: Amenity[];

    getAmenities() {
        return this.amenities;
    }
}

// DESPUÉS

class Review {

    hotelAmenities: Amenity[];

    getHotelAmenities() {
        this.hotelAmenities = Hotel.getAmenities;
    }

    getAmenities() {
        return this.hotelAmenities;
    }
}

class HotelEntity {

    hotelData: Amenity[];

    getHotelData(): Amenity[] {
        this.hotelData = Hotel.getAmenities;
    }

    getData() {
        return this.hotelData;
    }
}


class Hotel {

    amenities: Amenity[];

    getAmenities() {
        return this.amenities;
    }
}
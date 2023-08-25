
export class SearchFlight {
    currency: string;
    departureAirport: {
        time: string;
        code: string;
        tz: string;
        timeZone: string;
        type: number;
        label: string;
        country: {
            label: string;
            code: string;
        }
        city: string;
    }
    arrivalAirport: {
        time: string;
        code: string;
        tz: string;
        timeZone: string;
        type: number;
        label: string;
        country: {
            label: string;
            code: string;
        }
        city: string;
    }
}
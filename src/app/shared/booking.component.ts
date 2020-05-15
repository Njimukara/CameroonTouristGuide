import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    templateUrl: './booking.component.html',
    styles: [`
        .booking {
            padding-left: 10%;
            margin-top: 10px;
            margin-left: 5%;
            border: 1px solid black;
            border-radius: 5px;}
        .form-row {
            padding: 10px;
        }
        .booking-image img{
            margin-top: 50%;
            margin-left 30%;
            width: 100%;
            height:100%;}
        .booking-heading {
            font-size: 2em;
            padding: 1%;
        }
        .form-container {
            width: 90%;
            padding: 5%;
        }
            `]
})

export class BookingComponent implements OnInit {
    bookingForm: FormGroup

    ngOnInit() {
        let region = new FormControl()
        let division = new FormControl()
        let siteName = new FormControl()
        let firstName = new FormControl()
        let lastName = new FormControl()
        let email = new FormControl()
        let date = new FormControl()
        this.bookingForm = new FormGroup({
            region: region,
            division: division,
            siteName: siteName,
            firstName: firstName,
            lastName: lastName,
            email: email,
            date: date
        })
    }
}
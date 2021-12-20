import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';

    public async ngOnInit(): Promise<void> {
        const data = {
            supplierId: '1',
            email: 'lucas.cardoso@vaees.com'
        };
        await axios.post('/api/supplier-management/Emails', data);
        const result = await axios.get('/api/supplier-management/Emails');
        console.log(result.data);
    }
}

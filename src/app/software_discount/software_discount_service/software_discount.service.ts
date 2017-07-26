import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Injectable()
export class Software_Discount_Service {
    //  Global Variables
    private headers = new Headers({
        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        'Content-Type': 'application/json'
    });
    private options = new RequestOptions({ headers: this.headers });

    constructor(
        private router: Router,
        private http: Http,
        private toastr : ToastsManager
    ) { }


    //LIST OF MSTDISCOUNT
    public getListOfDiscount(): wijmo.collections.ObservableArray {
        let discountObsevableArray = new wijmo.collections.ObservableArray();
        let url = "http://localhost:2558/api/discount/list";
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {
                    for (var i = 0; i <= results.length - 1; i++) {
                        discountObsevableArray.push({
                            Id: results[i].Id,
                            Discount: results[i].Discount,
                            DiscountRate: results[i].DiscountRate,
                            IsVatExempt: results[i].IsVatExempt,
                            IsDateScheduled: results[i].IsDateScheduled,
                            DateStart: results[i].DateStart,
                            DateEnd: results[i].DateEnd,
                            IsTimeScheduled: results[i].IsTimeScheduled,
                            TimeStart: results[i].TimeStart,
                            TimeEnd: results[i].TimeEnd,
                            IsDayScheduled: results[i].IsDayScheduled,
                            DayMon: results[i].DayMon,
                            DayTue: results[i].DayTue,
                            DayWed: results[i].DayWed,
                            DayThu: results[i].DayThu,
                            DayFri: results[i].DayFri,
                            DaySat: results[i].DaySat,
                            DaySun: results[i].DaySun,
                            EntryUserId: results[i].EntryUserId,
                            EntryDateTime: results[i].EntryDateTime,
                            UpdateUserId: results[i].UpdateUserId,
                            UpdateDateTime: results[i].UpdateDateTime,
                            IsLocked: results[i].IsLocked,
                        });

                        // for (var j = 0; j < results[i].listUnit.length; j++) {
                        //     console.log(results[i].listUnit[j].Unit + " - " + (j + 1));
                        // }
                    }
                }
            }
        );
        return discountObsevableArray;
    }


    //ADD DISCOUNT 
    public postDiscountData(discountObject: Object) {
        let url = "http://localhost:2558/api/discount/post";
        this.http.post(url, JSON.stringify(discountObject), this.options).subscribe(
            response => {
                var results = response.json();
                if (results > 0) {
                    this.router.navigate(['/discountdetail', results]);
                } else {
                    alert("Error");
                }
            },
            error => {
                alert("Error");
            }
        )
    }

    //DELETE DISCOUNT
    public deleteDiscountItem(id: number, toastr: ToastsManager) {
        let url = "http://localhost:2558/api/discount/delete/" + id;
        this.http.delete(url, this.options).subscribe(
            response => {
                this.toastr.info('', 'Successfully Deleted');
                setTimeout(() => {
                    (<HTMLButtonElement>document.getElementById("refreshGrid")).click();
                }, 1000)
            },
            error => {
                    alert("Error");
            }
        )
    }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log("Component Initialised.......")
  }

  data = [
    {
      name: "Test 1",
      age: 13,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 2',
      age: 11,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 4',
      age: 10,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
  ];

  result = [
    {
      "Overall_platform_email_count": 110000013571
    },
    {
      "Overall_platform_sms_count": 13585
    },
    {
      "platform_email_count": 110000003071
    },
    {
      "platform_sms_count": 3185
    },
    {
      "other_email": 22
    },
    {
      "other_sms": 17
    },
    {
      "org_name": "Asset Test",
      "overall_orgwise_alloted_email_till_date": 0,
      "overall_orgwise_alloted_sms_till_date": 0,
      "remaining_email_count": 0,
      "remaining_sms_count": 0,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "saibabu2",
      "overall_orgwise_alloted_email_till_date": 0,
      "overall_orgwise_alloted_sms_till_date": 0,
      "remaining_email_count": 0,
      "remaining_sms_count": 0,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "sai test",
      "overall_orgwise_alloted_email_till_date": 0,
      "overall_orgwise_alloted_sms_till_date": 0,
      "remaining_email_count": 0,
      "remaining_sms_count": 0,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "UT",
      "overall_orgwise_alloted_email_till_date": 270,
      "overall_orgwise_alloted_sms_till_date": 270,
      "remaining_email_count": 270,
      "remaining_sms_count": 270,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "ram",
      "overall_orgwise_alloted_email_till_date": 0,
      "overall_orgwise_alloted_sms_till_date": 0,
      "remaining_email_count": 0,
      "remaining_sms_count": 0,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "Itanagar Test",
      "overall_orgwise_alloted_email_till_date": 0,
      "overall_orgwise_alloted_sms_till_date": 0,
      "remaining_email_count": 0,
      "remaining_sms_count": 0,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "Prabhat_org.",
      "overall_orgwise_alloted_email_till_date": 0,
      "overall_orgwise_alloted_sms_till_date": 0,
      "remaining_email_count": 0,
      "remaining_sms_count": 0,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "sai ORG",
      "overall_orgwise_alloted_email_till_date": 0,
      "overall_orgwise_alloted_sms_till_date": 0,
      "remaining_email_count": 0,
      "remaining_sms_count": 0,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "ILM Org",
      "overall_orgwise_alloted_email_till_date": 12,
      "overall_orgwise_alloted_sms_till_date": 12,
      "remaining_email_count": 12,
      "remaining_sms_count": 12,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "alert",
      "overall_orgwise_alloted_email_till_date": 0,
      "overall_orgwise_alloted_sms_till_date": 0,
      "remaining_email_count": 0,
      "remaining_sms_count": 0,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "SMS Count",
      "overall_orgwise_alloted_email_till_date": 0,
      "overall_orgwise_alloted_sms_till_date": 0,
      "remaining_email_count": 0,
      "remaining_sms_count": 0,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "Bajaj Office",
      "overall_orgwise_alloted_email_till_date": 0,
      "overall_orgwise_alloted_sms_till_date": 0,
      "remaining_email_count": 0,
      "remaining_sms_count": 0,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "Static",
      "overall_orgwise_alloted_email_till_date": 0,
      "overall_orgwise_alloted_sms_till_date": 0,
      "remaining_email_count": 0,
      "remaining_sms_count": 0,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "BEL Dig",
      "overall_orgwise_alloted_email_till_date": 0,
      "overall_orgwise_alloted_sms_till_date": 0,
      "remaining_email_count": 0,
      "remaining_sms_count": 0,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "BEL ABSQ DD",
      "overall_orgwise_alloted_email_till_date": 0,
      "overall_orgwise_alloted_sms_till_date": 0,
      "remaining_email_count": 0,
      "remaining_sms_count": 0,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "Belcitisol",
      "overall_orgwise_alloted_email_till_date": 100,
      "overall_orgwise_alloted_sms_till_date": 100,
      "remaining_email_count": 100,
      "remaining_sms_count": 100,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "Nirlep Factory",
      "overall_orgwise_alloted_email_till_date": 0,
      "overall_orgwise_alloted_sms_till_date": 0,
      "remaining_email_count": 0,
      "remaining_sms_count": 0,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "AEPL",
      "overall_orgwise_alloted_email_till_date": 0,
      "overall_orgwise_alloted_sms_till_date": 0,
      "remaining_email_count": 0,
      "remaining_sms_count": 0,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "MobileTesting",
      "overall_orgwise_alloted_email_till_date": 0,
      "overall_orgwise_alloted_sms_till_date": 0,
      "remaining_email_count": 0,
      "remaining_sms_count": 0,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "Demo Pune",
      "overall_orgwise_alloted_email_till_date": 0,
      "overall_orgwise_alloted_sms_till_date": 0,
      "remaining_email_count": 0,
      "remaining_sms_count": 0,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "Arunachal Pradesh Power",
      "overall_orgwise_alloted_email_till_date": 0,
      "overall_orgwise_alloted_sms_till_date": 0,
      "remaining_email_count": -1,
      "remaining_sms_count": 0,
      "used_email_count": 1,
      "used_sms_count": 0
    },
    {
      "org_name": "Business",
      "overall_orgwise_alloted_email_till_date": 777777779,
      "overall_orgwise_alloted_sms_till_date": 99999999999,
      "remaining_email_count": 777777779,
      "remaining_sms_count": 99999999999,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "Eigen Tech",
      "overall_orgwise_alloted_email_till_date": 0,
      "overall_orgwise_alloted_sms_till_date": 0,
      "remaining_email_count": 0,
      "remaining_sms_count": 0,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "Super-Admin",
      "overall_orgwise_alloted_email_till_date": 10,
      "overall_orgwise_alloted_sms_till_date": 10,
      "remaining_email_count": 10,
      "remaining_sms_count": 10,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "QA_test",
      "overall_orgwise_alloted_email_till_date": 102,
      "overall_orgwise_alloted_sms_till_date": 102,
      "remaining_email_count": 102,
      "remaining_sms_count": 102,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "PT",
      "overall_orgwise_alloted_email_till_date": 0,
      "overall_orgwise_alloted_sms_till_date": 0,
      "remaining_email_count": 0,
      "remaining_sms_count": 0,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "ALERT",
      "overall_orgwise_alloted_email_till_date": 0,
      "overall_orgwise_alloted_sms_till_date": 0,
      "remaining_email_count": 0,
      "remaining_sms_count": 0,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "alert",
      "overall_orgwise_alloted_email_till_date": 0,
      "overall_orgwise_alloted_sms_till_date": 0,
      "remaining_email_count": 0,
      "remaining_sms_count": 0,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "alertnew",
      "overall_orgwise_alloted_email_till_date": 0,
      "overall_orgwise_alloted_sms_till_date": 0,
      "remaining_email_count": 0,
      "remaining_sms_count": 0,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "orgalert",
      "overall_orgwise_alloted_email_till_date": 0,
      "overall_orgwise_alloted_sms_till_date": 0,
      "remaining_email_count": 0,
      "remaining_sms_count": 0,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "nike",
      "overall_orgwise_alloted_email_till_date": 0,
      "overall_orgwise_alloted_sms_till_date": 0,
      "remaining_email_count": 0,
      "remaining_sms_count": 0,
      "used_email_count": 0,
      "used_sms_count": 0
    },
    {
      "org_name": "cyber",
      "overall_orgwise_alloted_email_till_date": 222,
      "overall_orgwise_alloted_sms_till_date": 322,
      "remaining_email_count": 222,
      "remaining_sms_count": 322,
      "used_email_count": 0,
      "used_sms_count": 0
    }
  ]

  // How to download csv data
  fileDownload() {
    let options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Report Data',
      useBom: true,
      noDownload: false,
      headers: ["Overall Email","Overall SMS","Platform EMail","Platform SMS","Other Email","Other SMS","Org Name", "Overall Orgwise Email", "Overall Orgwise SMS", "Remaining Email", "Remaining SMS", "Used Email", "Used SMS"]
    };

    new ngxCsv(this.result, "Report", options);
  }

}

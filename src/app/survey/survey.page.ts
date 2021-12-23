import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as Survey from 'survey-angular';


@Component({
  selector: '',
  template: `<div id="surveyContainer" style="background: rgb(208, 243, 220); padding: 15px;"></div>
  <div id="surveyResult"></div>`
})
export class SurveyPage {

  ngOnInit() {

    var json = {

        description: "This is to inform all GC CCS students that you can avail of the free COVID-19 vaccination provided by Olongapo LGU City Health Office .",
        pages: [
         {
          name: "page1",
          elements: [
           {
            type: "text",
            name: "question1",
            title: "Last Name",
            isRequired: true
           },
           {
            type: "text",
            name: "question2",
            title: "First Name",
            isRequired: true
           },
           {
            type: "text",
            name: "question3",
            title: "Middle Name (N/A if none)",
            isRequired: true
           },
           {
            type: "dropdown",
            name: "question5",
            title: "Enrolled Program",
            isRequired: true,
            choices: [
             {
              value: "item1",
              text: "BSIT"
             },
             {
              value: "item2",
              text: "BSCS"
             },
             {
              value: "item3",
              text: "BSEMC"
             },
             {
              value: "item4",
              text: "ACT"
             }
            ]
           },
           {
            type: "dropdown",
            name: "question6",
            title: "Year Level",
            isRequired: true,
            choices: [
             {
              value: "item1",
              text: "1st Year"
             },
             {
              value: "item2",
              text: "2nd Year"
             },
             {
              value: "item3",
              text: "3rd Year"
             }
            ]
           },
           {
            type: "text",
            name: "question4",
            title: "Contact/Mobile Number:"
           },
           {
            type: "text",
            name: "question7",
            title: "Age",
            isRequired: true
           },
           {
            type: "text",
            name: "question8",
            title: "Barangay of Residence",
            isRequired: true
           },
           {
            type: "radiogroup",
            name: "question9",
            title: "Have you been vaccinated for COVID-19?",
            isRequired: true,
            choices: [
             {
              value: "item1",
              text: "Yes"
             },
             {
              value: "item2",
              text: "No"
             }
            ]
           },
           {
            type: "radiogroup",
            name: "question10",
            title: "If not, are you willing to be vaccinated for COVID-19 on the scheduled date provided?",
            isRequired: true,
            choices: [
             {
              value: "item1",
              text: "Yes"
             },
             {
              value: "item2",
              text: "No"
             },
             {
              value: "item3",
              text: "N/A (if already been vaccinated)"
             }
            ]
           },
           {
            type: "file",
            name: "question11",
            title: "Insert your Vaccination Card Photo"
           }
          ],
          title: "COVID-19 Vaccination Form for Gordon College Students",
          description: "*Any information gathered from this Google Form will be collected, processed and stored pursuant to the general principles of transparency, legitimate purpose, and proportionality, as mandated by Republic Act No. 10173 or the Data Privacy Act of 2012, its Implementing Rules and Regulations (IRR), and other relevant privacy policies issued by the National Privacy Commission."
         }
        ]
       }


    function copyCurrentColumnToRenewal(parms) {
      console.log('parms = ', parms);
      if (parms.length !== 3) {
        return;
      }
      const questionName = parms[0];
      const colCpoyFrom = parms[1];
      const colCopyTo = parms[2];
      const survey = this.survey;
      const matrixQstn = survey.getQuestionByName(questionName);
      const newRowValue = {};
      console.log('matrixQstn.visibleRows.length = ', matrixQstn.visibleRows.length);
      for (let rowIndex = 0; rowIndex < matrixQstn.visibleRows.length; rowIndex++) {
        var row = matrixQstn.visibleRows[rowIndex];
        var copyValue = row.getValue(colCpoyFrom);
        var columnTo = row.getQuestionByColumnName(colCopyTo);
        if (!!copyValue) {
          columnTo.value = copyValue;
        }
      }
    }
    Survey.FunctionFactory.Instance.register('copyCurrentColumnToRenewal', copyCurrentColumnToRenewal);

    var model = window["survey"] = new Survey.ReactSurveyModel(json);

    model
      .onComplete
      .add(function (result) {
        document
          .querySelector('#surveyResult')
          .innerHTML = "result: " + JSON.stringify(result.data);
      });

    Survey.StylesManager.applyTheme("bootstrapmaterial");
    Survey.SurveyNG.render('surveyContainer', { model: model });
  }
}
import React from "react";
import * as ReactDom from "react-dom";
import logo from "./logo.svg";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule";
import { defaultData } from "./datasource/datasource";
import "./App.css";

function App() {
  /*
  const data: object[] = [
    {
      Id: 2,
      Subject: "Meeting",
      StartTime: new Date(2018, 1, 13, 0, 0),
      EndTime: new Date(2018, 1, 13, 1, 30),
      IsAllDay: false,
      Status: "Completed",
      Priority: "low",
    },
    {
      Id: 2,
      Subject: "打撞球時間",
      StartTime: new Date(2018, 1, 15, 10, 0),
      EndTime: new Date(2018, 1, 16, 12, 30),
      IsAllDay: true,
      Status: "Waiting",
      Priority: "High",
    },
  ];
  const fieldsData = {
    id: "Id",
    subject: { name: "Subject" },
    isAllDay: { name: "IsAllDay" },
    startTime: { name: "StartTime" },
    endTime: { name: "EndTime" },
  };
  const eventSettings = { dataSource: data, fields: fieldsData };
  */

  /* Set the schdule data source */
  const eventSettings = { dataSource: defaultData };
  return (
    <ScheduleComponent
      height="550px"
      selectedDate={new Date(2018, 1, 22)}
      eventSettings={eventSettings}
      currentView="Month"
    >
      <ViewsDirective>
        <ViewDirective option="WorkWeek" startHour="10:00" endHour="18:00" />
        <ViewDirective option="Week" startHour="07:00" endHour="15:00" />
        <ViewDirective option="Month" showWeekend={false} />
        <ViewDirective option="Day" />
        <ViewDirective option="Week" />
        <ViewDirective option="WorkWeek" />
        <ViewDirective option="Month" />
        <ViewDirective option="Agenda" />
      </ViewsDirective>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
}

export default App;

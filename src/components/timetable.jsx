import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid'

const TimeTable = ({user,db,batch}) => {
    const [history,setHistory] = React.useState();
    const calendarRef = React.createRef()
    // const lectureRef = db.collection(batch);
    if (!history) {
		db.collection(batch)
			.doc("history")
			.get()
			.then((doc) => {
				let h = doc.data().events;
				h.forEach((i) => {
					i.start = i.start.toMillis();
                    i.end = i.end.toMillis();

				});
				setHistory(h);
			});
	}
    // const query = lectureRef.where('repeat','==',true);
    // const [lectures] = useCollectionData(query,{idField:'id'});

    // const fun = ()=>{
    //     let calendarApi = this.calendarRef.current.getApi();
    // }

    const getweek=(args)=>{
        console.log(args);
    }

    // console.log(his);
    return ( <div><br/>
        <FullCalendar
            plugins={[ timeGridPlugin ]}
            initialView="timeGridWeek"
            ref={calendarRef}
            expandRows={true}
            allDaySlot={false}
            contentHeight='auto'
            displayEventTime={false}
            slotMinTime='09:00:00'
            slotMaxTime='19:00:00'
            weekNumbers={true}
            weekNumberContent= {getweek}
            events={history}
        />
    </div> );
}
 
export default TimeTable;
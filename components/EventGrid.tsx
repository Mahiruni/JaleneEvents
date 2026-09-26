import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";

const events = [
  { slug:"jalene-after-dark", date:"18 OCT 2026", category:"NIGHTLIFE", title:"Jalene After Dark", place:"Addis Ababa", image:"https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=85" },
  { slug:"golden-hour", date:"07 NOV 2026", category:"EXPERIENCE", title:"Golden Hour", place:"Addis Ababa", image:"https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=85" },
  { slug:"the-gathering", date:"21 NOV 2026", category:"CULTURE", title:"The Gathering", place:"Addis Ababa", image:"https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=85" }
];

export function EventGrid() {
  return <div className="event-grid">{events.map((event,i)=><Link href={`/events/${event.slug}`} className={`event-card ${i===0?"featured":""}`} key={event.slug}>
    <div className="event-photo" style={{backgroundImage:`url(${event.image})`}}><span className="event-category">{event.category}</span><span className="event-plus"><ArrowUpRight size={22}/></span></div>
    <div className="event-meta"><span><CalendarDays size={14}/>{event.date}</span><span><MapPin size={14}/>{event.place}</span></div><h3>{event.title}</h3>
  </Link>)}</div>;
}
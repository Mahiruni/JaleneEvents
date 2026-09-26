import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays, MapPin } from "lucide-react";

const events=[
 ["jalene-after-dark","18 OCT 2026","NIGHTLIFE","Jalene After Dark","Addis Ababa","https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=85"],
 ["golden-hour","07 NOV 2026","EXPERIENCE","Golden Hour","Addis Ababa","https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1600&q=85"],
 ["the-gathering","21 NOV 2026","CULTURE","The Gathering","Addis Ababa","https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1600&q=85"]
];
export default function EventsPage(){return <main className="subpage"><header className="nav solid"><Link href="/" className="brand"><span className="brand-mark">J</span><span>JALENE</span><small>EVENT</small></Link><Link href="/" className="arrow-link">Back home <ArrowLeft size={16}/></Link></header><section className="subhero"><div className="section-kicker"><span>EVENTS</span><span>ETHIOPIA</span></div><h1>Find your<br/><em>next experience.</em></h1><p>Curated events and experiences by Jalene Event.</p></section><section className="events-page-grid">{events.map(([slug,date,cat,title,place,image])=><Link className="big-event-card" href={`/events/${slug}`} key={slug}><div className="big-event-image" style={{backgroundImage:`url(${image})`}}><span>{cat}</span><b><ArrowUpRight/></b></div><div className="event-meta"><span><CalendarDays size={14}/>{date}</span><span><MapPin size={14}/>{place}</span></div><h2>{title}</h2></Link>)}</section></main>}

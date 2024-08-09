import React, { createContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const DisplayContext = createContext();
export default DisplayContext;

// eslint-disable-next-line react/prop-types
export const DisplayProvider = ({ children }) => {
    let [facilities, setFacilities] = useState(() =>
        Cookies.get('facilities')
        ? JSON.parse(Cookies.get('facilities'))
        : null
    );
    let [team, setTeam] = useState(() =>
        Cookies.get('team')
        ? JSON.parse(Cookies.get('team'))
        : null
    );
    let [gallery, setGallery] = useState(() =>
        Cookies.get('gallery')
        ? JSON.parse(Cookies.get('gallery'))
        : null
    );
    let [clubs, setClubs] = useState(() =>
        Cookies.get('clubs')
        ? JSON.parse(Cookies.get('clubs'))
        : null
    );

    let [clubMembers, setClubMembers] = useState(() =>
        Cookies.get('clubMembers')
        ? JSON.parse(Cookies.get('clubMembers'))
        : null
    );

    let [events, setEvents] = useState(() =>
        Cookies.get('events')
        ? JSON.parse(Cookies.get('events'))
        : null
    );

    let [updates, setUpdates] = useState(() =>
        Cookies.get('events')
        ? JSON.parse(Cookies.get('events'))
        : null
    );

    let [stats, setStats] = useState(() =>
        Cookies.get('stats')
        ? JSON.parse(Cookies.get('stats'))
        : null
    );

    let getFacilities = () => {
        axios.get("http://127.0.0.1:8000/api/facilities/")
            .then((response) => {
                console.log(response.data)
                setFacilities(response.data);
                Cookies.set('facilities', JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    let getTeams = () => {
        axios.get("http://127.0.0.1:8000/api/teams/")
        .then((response) => {
            console.log(response.data);
            setTeam(response.data);
            Cookies.set('team', JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        })
    };

    let getGallery = () => {
        axios.get("http://127.0.0.1:8000/api/gallery/")
        .then((response) => {
            console.log(response.data);
            setGallery(response.data);
            Cookies.set('gallery', JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        })
    }

    let getClubs = () => {
        axios.get("http://127.0.0.1:8000/api/clubs/")
        .then((response) => {
            setClubs(response.data);
            Cookies.set('clubs', JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        })
    }

    let getClubMembers = (e) => {
        axios.get("http://127.0.0.1:8000/api/clubs/" + e + "/")
        .then((response) => {
            setClubMembers(response.data);
            Cookies.set('clubMembers', JSON.stringify(response.data));
            getClubs();
        })
        .catch((error) => {
            console.log(error);
        })
    }

    let getEvents = () => {
        axios.get("http://127.0.0.1:8000/api/events/")
            .then((response) => {
                console.log(response.data)
                setEvents(response.data);
                Cookies.set('events', JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    let getUpdates = () => {
        axios.get("http://127.0.0.1:8000/api/updates/")
            .then((response) => {
                console.log(response.data)
                setUpdates(response.data);
                Cookies.set('updates', JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    let getStats = () => {
        axios.get("http://127.0.0.1:8000/api/stats/")
            .then((response) => {
                console.log(response.data)
                setStats(response.data);
                Cookies.set('stats', JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    let SaveMessage = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            Name: formData.get('name'),
            Email: formData.get('email'),
            Phone_Number: formData.get('phone'),
            Message: formData.get('message')
        };

        console.log(data);
    
        axios.post('http://localhost:8000/api/messages/', data)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };


    const ContextData = {
        getFacilities,
        facilities,
        getTeams,
        team,
        getGallery,
        gallery: gallery,
        getClubs,
        clubs,
        getClubMembers,
        clubMembers,
        getEvents,
        events,
        getUpdates,
        updates,
        getStats,
        stats,
        SaveMessage,
    };

    return (
        <DisplayContext.Provider value={ContextData}>
            {children}
        </DisplayContext.Provider>
    );
};

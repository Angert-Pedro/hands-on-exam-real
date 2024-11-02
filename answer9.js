let consultants = [
    { name: 'Peyton Turner', company: 'Walker Inc' },
    { name: 'Isaias Fritsch', company: 'Walker Inc' },
    { name: 'Susana Wilderman', company: 'Nolan Inc' }
];

function groupConsultantsByCompany(consultants) {
    const grouped = {};

    consultants.forEach(consultant => {
        const company = consultant.company;

        if (!grouped[company]) {
            grouped[company] = [];
        }

        grouped[company].push(consultant);
    });

    return grouped;
}

const groupedConsultants = groupConsultantsByCompany(consultants);
console.log(groupedConsultants);

//Test

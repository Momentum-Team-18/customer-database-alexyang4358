let customerProfiles = document.querySelector ("#customerProfiles");
console.log(customers);

// let formattedRegistration = customers(customer.registered.date).format("MMM Do YY")

 //build a container for each customer and populate with name

 for (let customer of customers) {
    let customerCard = document.createElement('div');
    customerCard.classList.add("card");
        // created the card for customers

    let customerImage = document.createElement('img');
        customerImage.src = customer.picture.medium;
            customerImage.classList.add("customerImage");
            //apply style to a class in css first, then add class to the element with JS^.
        customerCard.appendChild(customerImage);
        // added customer image to card
    
    let customerName = document.createElement('h2');
        customerName.innerText = `${customer.name.first} ${customer.name.last}`;
        customerCard.appendChild(customerName);
        customerName.classList.add("camel")
        // added the name of each customer to card
    
    let customerEmail = document.createElement('p');
        customerEmail.innerText = customer.email;
        customerCard.appendChild(customerEmail);
        // added the email of each customer to card

    let customerSt = document.createElement('p');
        customerSt.innerText = `${customer.location.street.number} ${customer.location.street.name}`;
        customerCard.appendChild(customerSt);
        // added street number and name

    let formattedState = nameToAbbr(customer.location.state)
    let customerRegion = document.createElement('p');
        customerRegion.innerText = `${customer.location.city}, ${formattedState} ${customer.location.postcode}`;
        customerCard.appendChild(customerRegion);
        // added city, state and zipcode
 
    let formattedDOB = moment(customer.dob.date).format("MMM D, YYYY");
    let customerDOB = document.createElement('p');
        customerDOB.innerText = `DOB: ${formattedDOB}`;
        customerCard.appendChild(customerDOB);
        // added date of birth

    let formattedRegistration = moment(customer.dob.date).format("MMM D, YYYY");
    let customerSince = document.createElement('p');
        customerSince.innerText = `Customer since: ${formattedRegistration}`;
        customerCard.appendChild(customerSince);
        // added customer since to customer card
        
    customerProfiles.appendChild(customerCard);
        // added customer cards to customer profiles container/div
 }


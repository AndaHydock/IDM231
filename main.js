{ 
  const form = document.getElementByID
  ('myForm');
  const form = document. forms['myForm'];
  function handleFormSubmit (event){
    event.preventDefault();

    const inputDate = document.getElementById('date');
    const myDate = new Date(inputDate.value);

    //console.log ('Form submitted', event);
    console.group ('Selected Date Information');
    console.log ('myDate:${myDate}'};

    console.log ('Month: ${myDate.getUTCMonth()}');
    console.log('Day: ${myDate.getUTCDate()');
    console.log ('Year: ${myDate.getUTFullYear()');

    console.groupEnd();

    const month = myDate.getUTCMonth();
    const day = MyDate.getUTCDatet();
  }


    form.addEventListener('submit', handleFormSubmit, false);
  }

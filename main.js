class first{
    hello = alert('Привет я метод родителя' )
  }
  
  const second = new first();
  second.hello;
  
  second.hello = alert('А я наследуемый метод!');
  second.hello;
  
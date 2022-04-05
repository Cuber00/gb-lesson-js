// Задача 1

let a = 1, b = 1, c, d;

  /*
  В переменую c присваивается значение a + 1 (префиксная форма инкремента)
   */
  c = ++a;
  console.log(c);

  /*
  Инкремент расположен в постфиксной форме, в переменную d присваивается началоное значение b == 1
   */
  d = b++;
  console.log(d);

  /*
  В переменную записывается результат выражения 2 + (a==2 + 1)
   */
  c = 2 + ++a;
  console.log(c);

  /*
   Постфиксная форма b++ также увеличивает b, но возвращает старое значение (которое было до увеличения), т.е. d = 2 + b==2 (Выше уже выполнялся код b++)
   */
  d = 2 + b++;
  console.log(d);

  console.log(a);
  console.log(b);
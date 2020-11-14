<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>Loops: Task 1</title>
    <style>
      p {
        color: purple;
        margin: 0.5em 0;
      }

      * {
        box-sizing: border-box;
      }
    </style>
    <link rel="stylesheet" href="../styles.css" />
  </head>

  <body>

    <section class="preview">



    </section>

  </body>
  <script>
    let myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
    let list = document.createElement('ul');

    for (let i = 0; i < myArray.length; i++) {
        list += myArray[i];
}
    para.textContent = list;
    // Don't edit the code below here!

    const section = document.querySelector('section');
    section.appendChild(list);
  </script>

</html>
const text = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non nisi est sit. Orci ac auctor augue mauris. Nulla posuere sollicitudin aliquam ultrices sagittis orci. Pellentesque elit eget gravida cum sociis. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Ac tincidunt vitae semper quis lectus nulla at volutpat. Lorem ipsum dolor sit amet consectetur adipiscing. Tellus rutrum tellus pellentesque eu tincidunt.',
  'Mi quis hendrerit dolor magna. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Vel eros donec ac odio tempor orci dapibus. Turpis nunc eget lorem dolor sed viverra. Turpis egestas integer eget aliquet nibh praesent. Risus feugiat in ante metus dictum at tempor commodo. Sed velit dignissim sodales ut eu sem integer vitae. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Non arcu risus quis varius. At lectus urna duis convallis convallis tellus id interdum.',
  'Tristique senectus et netus et malesuada fames ac. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Nisl vel pretium lectus quam id leo. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Vestibulum rhoncus est pellentesque elit. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Tincidunt ornare massa eget egestas purus viverra accumsan. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Euismod in pellentesque massa placerat duis ultricies. Quam quisque id diam vel quam elementum pulvinar etiam non. Phasellus vestibulum lorem sed risus ultricies. Mauris commodo quis imperdiet massa. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Quis risus sed vulputate odio ut.',
  'Sit amet massa vitae tortor condimentum. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Velit aliquet sagittis id consectetur. Habitant morbi tristique senectus et netus et malesuada fames. In massa tempor nec feugiat. Pretium viverra suspendisse potenti nullam. Integer feugiat scelerisque varius morbi enim. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. At augue eget arcu dictum varius duis at consectetur. Quisque sagittis purus sit amet. Ultrices sagittis orci a scelerisque purus semper eget duis at. Turpis tincidunt id aliquet risus feugiat in ante metus dictum.',
  'In est ante in nibh mauris cursus mattis molestie a. Sit amet mauris commodo quis imperdiet massa tincidunt. Netus et malesuada fames ac turpis egestas sed. Vel risus commodo viverra maecenas accumsan. Felis imperdiet proin fermentum leo. Tortor at auctor urna nunc id cursus metus aliquam eleifend. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Ut consequat semper viverra nam libero justo laoreet sit. Mattis molestie a iaculis at erat. Quis auctor elit sed vulputate mi. At lectus urna duis convallis convallis tellus id. Iaculis nunc sed augue lacus viverra. Aliquet nec ullamcorper sit amet risus nullam eget. Viverra suspendisse potenti nullam ac tortor vitae. Diam maecenas ultricies mi eget mauris pharetra et ultrices neque.',
  'Ut tellus elementum sagittis vitae. Sit amet purus gravida quis. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Phasellus egestas tellus rutrum tellus pellentesque eu. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. A diam sollicitudin tempor id eu nisl nunc. Lacus luctus accumsan tortor posuere ac ut consequat semper. In fermentum posuere urna nec. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Sed risus ultricies tristique nulla. Pellentesque massa placerat duis ultricies.',
  'Libero id faucibus nisl tincidunt eget nullam non nisi. Amet massa vitae tortor condimentum lacinia quis vel eros. Maecenas pharetra convallis posuere morbi leo urna molestie at. Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Lectus proin nibh nisl condimentum id venenatis a. A lacus vestibulum sed arcu non odio euismod. Sodales ut eu sem integer vitae justo eget magna. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Aliquam eleifend mi in nulla posuere. Ac feugiat sed lectus vestibulum. Ut ornare lectus sit amet. Scelerisque in dictum non consectetur a erat. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum. Neque sodales ut etiam sit amet nisl purus in mollis. Interdum varius sit amet mattis vulputate enim nulla aliquet. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Adipiscing elit duis tristique sollicitudin nibh.',
  'Et malesuada fames ac turpis egestas integer. Euismod quis viverra nibh cras pulvinar mattis nunc. Est sit amet facilisis magna etiam tempor orci eu lobortis. Laoreet id donec ultrices tincidunt arcu. Arcu felis bibendum ut tristique et egestas quis ipsum. Eros donec ac odio tempor orci. Augue ut lectus arcu bibendum at. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Ultricies mi quis hendrerit dolor magna eget. Eros in cursus turpis massa tincidunt dui ut ornare. Maecenas accumsan lacus vel facilisis volutpat. Turpis cursus in hac habitasse platea dictumst. Quam elementum pulvinar etiam non quam.',
  'Quisque egestas diam in arcu cursus. Condimentum vitae sapien pellentesque habitant morbi tristique. Duis at consectetur lorem donec. Id nibh tortor id aliquet lectus proin nibh. Ultrices tincidunt arcu non sodales neque sodales ut etiam. Risus pretium quam vulputate dignissim suspendisse in est. In tellus integer feugiat scelerisque varius morbi enim. Massa sed elementum tempus egestas sed sed risus. Nunc consequat interdum varius sit amet mattis vulputate enim. Et sollicitudin ac orci phasellus egestas tellus rutrum. Velit egestas dui id ornare arcu odio. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. At lectus urna duis convallis convallis.',
  'Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Hac habitasse platea dictumst quisque sagittis purus sit amet. Ut placerat orci nulla pellentesque dignissim enim. Tempus egestas sed sed risus pretium. Velit sed ullamcorper morbi tincidunt ornare massa eget. Nisl vel pretium lectus quam id. Id donec ultrices tincidunt arcu non sodales neque sodales. Euismod lacinia at quis risus. Eu feugiat pretium nibh ipsum. Tortor at auctor urna nunc. Suspendisse in est ante in nibh mauris cursus mattis. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Vivamus at augue eget arcu dictum. Proin nibh nisl condimentum id venenatis a. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh.'
]

const form = document.getElementById('form')
const range = document.getElementById('range')
const numberRange = document.getElementById('number-range')
const paragraphs = document.getElementById('paragraphs')

const handleRange = (event) => {
  const value = event.target.value

  numberRange.textContent = value
}

const handleSubmit = (event) => {
  event.preventDefault()

  const stringToNumber = Number(numberRange.textContent)

  const sliceParagraph = text.slice(0, stringToNumber)

  const result = sliceParagraph.map((item) => {
    return `<p class="container--lorem-text--result">${item}</p>`
  }).join('')

  // const result = sliceParagraph.reduce((previousValue, previousCurrent) => {
  //   previousValue += `<p class="container--lorem-text--result">${previousCurrent}</p>`

  //   return previousValue
  // }, '')

  paragraphs.innerHTML = result
}

form.addEventListener('submit', handleSubmit)

range.addEventListener('input', handleRange)
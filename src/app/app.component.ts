import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = '<math xmlns = "http://www.w3.org/1998/Math/MathML">         <mrow><msup><mi>a</mi><mn>2</mn></msup>    <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup> <mo> = </mo>  <msup><mi>c</mi><mn>2</mn></msup </mrow> </math>';

  frac = '<math>    <mfrac bevelled="true">     <mfrac>        <mi> a </mi>     <mi> b </mi>     </mfrac>     <mfrac>        <mi> c </mi>        <mi> d </mi>     </mfrac>  </mfrac></math>'
}

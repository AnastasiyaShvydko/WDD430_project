export default function Form(){
    return(
        <>
        <form action="#">
    <p>
      <label>
        <input name="group1" type="radio" checked />
        <span>Red</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group1" type="radio" />
        <span>Yellow</span>
      </label>
    </p>
    <p>
      <label>
        <input className="with-gap" name="group1" type="radio"  />
        <span>Green</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group1" type="radio"  />
        <span>Brown</span>
      </label>
    </p>
    <textarea name="message" id=""></textarea>
  </form>
        
        </>
    )
}
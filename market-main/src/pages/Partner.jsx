import React from "react";

function Partner() {
  return (
    <div className="min-h-screen py-40 father-partner">
      <div className="wrapper12 mx-auto py-40">

        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">

          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-father">

            <h1 className="text-white text-5xl mb-3">Welcome</h1>
            <div>
              <p className="text-white text-2xl">"We invite forward-thinking investors to join us on a journey of innovation and growth. By becoming our partner, you align yourself with a vision for success, where opportunities are explored, challenges are met with resilience, and together, we shape the future of HubAlt. Let's embark on this exciting venture together and redefine what's possible."</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Register</h2>
            <p className="mb-4">
              Create your account. It’s free and only take a minute
            </p>

            <form action="#">
              <div className="grid grid-cols-2 gap-5">
                <input type="text" placeholder="FirstName" className="border border-gray-400 py-1 px-2" />
                <input type="text" placeholder="LastName" className="border border-gray-400 py-1 px-2" />
              </div>

              <div className="mt-5">
                <input type="text" placeholder="Email" className="border border-gray-400 py-1 px-2 w-full" />
              </div>

              <div className="mt-5">
                <select id="cars" className="border border-gray-400 py-1 px-2 w-full">
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>

              <div className="mt-5">
                <input type="number" placeholder="ENTER YOUR NUMBER" className="border border-gray-400 py-1 px-2 w-full" />
              </div>


              <div className="mt-5">
                <select id="occupation" name="occupation" className="border border-gray-400 py-1 px-2 w-full">
                  <option value="" selected="selected" disabled="disabled">-- select occupation --</option>
                  <optgroup label="Healthcare Practitioners and Technical Occupations:">
                    <option value="1">-  Chiropractor</option>
                    <option value="2">-  Dentist</option>
                    <option value="3">-  Dietitian or Nutritionist</option>
                    <option value="4">-  Optometrist</option>
                    <option value="5">-  Pharmacist</option>
                    <option value="6">-  Physician</option>
                    <option value="7">-  Physician Assistant</option>
                    <option value="8">-  Podiatrist</option>
                    <option value="9">-  Registered Nurse</option>
                    <option value="10">-  Therapist</option>
                    <option value="11">-  Veterinarian</option>
                    <option value="12">-  Health Technologist or Technician</option>
                    <option value="13">-  Other Healthcare Practitioners and Technical Occupation</option>
                  </optgroup>
                  <optgroup label="Healthcare Support Occupations:">
                    <option value="14">-  Nursing, Psychiatric, or Home Health Aide</option>
                    <option value="15">-  Occupational and Physical Therapist Assistant or Aide</option>
                    <option value="16">-  Other Healthcare Support Occupation</option>
                  </optgroup>
                  <optgroup label="Business, Executive, Management, and Financial Occupations:">
                    <option value="17">-  Chief Executive</option>
                    <option value="18">-  General and Operations Manager</option>
                    <option value="19">-  Advertising, Marketing, Promotions, Public Relations, and Sales Manager</option>
                    <option value="20">-  Operations Specialties Manager (e.g., IT or HR Manager)</option>
                    <option value="21">-  Construction Manager</option>
                    <option value="22">-  Engineering Manager</option>
                    <option value="23">-  Accountant, Auditor</option>
                    <option value="24">-  Business Operations or Financial Specialist</option>
                    <option value="25">-  Business Owner</option>
                    <option value="26">-  Other Business, Executive, Management, Financial Occupation</option>
                  </optgroup>
                  <optgroup label="Architecture and Engineering Occupations:">
                    <option value="27">-  Architect, Surveyor, or Cartographer</option>
                    <option value="28">-  Engineer</option>
                    <option value="29">-  Other Architecture and Engineering Occupation</option>
                  </optgroup>
                  <optgroup label="Education, Training, and Library Occupations:">
                    <option value="30">-  Postsecondary Teacher (e.g., College Professor)</option>
                    <option value="31">-  Primary, Secondary, or Special Education School Teacher</option>
                    <option value="32">-  Other Teacher or Instructor</option>
                    <option value="33">-  Other Education, Training, and Library Occupation</option>
                  </optgroup>
                  <optgroup label="Other Professional Occupations:">
                    <option value="34">-  Arts, Design, Entertainment, Sports, and Media Occupations</option>
                    <option value="35">-  Computer Specialist, Mathematical Science</option>
                    <option value="36">-  Counselor, Social Worker, or Other Community and Social Service Specialist</option>
                    <option value="37">-  Lawyer, Judge</option>
                    <option value="38">-  Life Scientist (e.g., Animal, Food, Soil, or Biological Scientist, Zoologist)</option>
                    <option value="39">-  Physical Scientist (e.g., Astronomer, Physicist, Chemist, Hydrologist)</option>
                    <option value="40">-  Religious Worker (e.g., Clergy, Director of Religious Activities or Education)</option>
                    <option value="41">-  Social Scientist and Related Worker</option>
                    <option value="42">-  Other Professional Occupation</option>
                  </optgroup>
                  <optgroup label="Office and Administrative Support Occupations:">
                    <option value="43">-  Supervisor of Administrative Support Workers</option>
                    <option value="44">-  Financial Clerk</option>
                    <option value="45">-  Secretary or Administrative Assistant</option>
                    <option value="46">-  Material Recording, Scheduling, and Dispatching Worker</option>
                    <option value="47">-  Other Office and Administrative Support Occupation</option>
                  </optgroup>
                  <optgroup label="Services Occupations:">
                    <option value="48">-  Protective Service (e.g., Fire Fighting, Police Officer, Correctional Officer)</option>
                    <option value="49">-  Chef or Head Cook</option>
                    <option value="50">-  Cook or Food Preparation Worker</option>
                    <option value="51">-  Food and Beverage Serving Worker (e.g., Bartender, Waiter, Waitress)</option>
                    <option value="52">-  Building and Grounds Cleaning and Maintenance</option>
                    <option value="53">-  Personal Care and Service (e.g., Hairdresser, Flight Attendant, Concierge)</option>
                    <option value="54">-  Sales Supervisor, Retail Sales</option>
                    <option value="55">-  Retail Sales Worker</option>
                    <option value="56">-  Insurance Sales Agent</option>
                    <option value="57">-  Sales Representative</option>
                    <option value="58">-  Real Estate Sales Agent</option>
                    <option value="59">-  Other Services Occupation</option>
                  </optgroup>
                  <optgroup label="Agriculture, Maintenance, Repair, and Skilled Crafts Occupations:">
                    <option value="60">-  Construction and Extraction (e.g., Construction Laborer, Electrician)</option>
                    <option value="61">-  Farming, Fishing, and Forestry</option>
                    <option value="62">-  Installation, Maintenance, and Repair</option>
                    <option value="63">-  Production Occupations</option>
                    <option value="64">-  Other Agriculture, Maintenance, Repair, and Skilled Crafts Occupation</option>
                  </optgroup>
                  <optgroup label="Transportation Occupations:">
                    <option value="65">-  Aircraft Pilot or Flight Engineer</option>
                    <option value="66">-  Motor Vehicle Operator (e.g., Ambulance, Bus, Taxi, or Truck Driver)</option>
                    <option value="67">-  Other Transportation Occupation</option>
                  </optgroup>
                  <optgroup label="Other Occupations:">
                    <option value="68">-  Military</option>
                    <option value="69">-  Homemaker</option>
                    <option value="70">-  Other Occupation</option>
                    <option value="71">-  Don't Know</option>
                    <option value="72">-  Not Applicable</option>
                  </optgroup>
                </select>
              </div>

              <div className="mt-5"> 
                <select id="salary" className="border border-gray-400 py-1 px-2 w-full">
                <option value="" selected="selected" disabled="disabled">-- select income--</option>
                  <option value="1">5000-20,000</option>
                  <option value="2">30,000-60,000</option>
                  <option value="3">80,000-1,20,000</option>
                  <option value="4">1,50,000-2,00,000</option>
                </select>
              </div>

              <div className="mt-6">
                <input type="checkbox" className="border border-gray-400" />
                <span>
                  I accept the <a href="#" className="text-purple-500 font-semibold">Terms of Use</a> &  <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a>
                </span>
              </div>

              <div className="mt-5">
                <button className="w-full bg-purple-500 py-3 text-center text-white">Register Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner;

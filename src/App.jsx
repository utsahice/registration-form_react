import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [gender, setGender] = useState('');
  const [skills, setSkills] = useState([]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSkills((prev) => [...prev, value]);
    } else {
      setSkills((prev) => prev.filter((skill) => skill !== value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted name:', name);
    console.log('Submitted email:', email);
    console.log('Submitted password:', pass);
    console.log('Submitted gender:', gender);
    console.log('Submitted skills:', skills);
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Registration Form
        </h2>

        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 p-2 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 p-2 rounded-md"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Gender</label>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Skills</label>
          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value="dancing"
                checked={skills.includes('dancing')}
                onChange={handleCheckboxChange}
              />
              Dancing
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value="painting"
                checked={skills.includes('painting')}
                onChange={handleCheckboxChange}
              />
              Painting
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value="coding"
                checked={skills.includes('coding')}
                onChange={handleCheckboxChange}
              />
              Coding
            </label>
          </div>
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 ">
          Submit
        </button>

        <div className="mt-6 text-sm text-gray-700">
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Password:</strong> {pass}
          </p>
          <p>
            <strong>Gender:</strong> {gender}
          </p>
          <p>
            <strong>Skills:</strong> {skills.join(', ')}
          </p>
        </div>
      </form>
    </div>
  );
}

export default App;

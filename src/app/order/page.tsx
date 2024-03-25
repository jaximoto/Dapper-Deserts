"use client"
import React, {useState} from "react"

interface FormData {
    name: string;
    email: string;
}
export default function Order()
{
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email:'',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Perform processing
        console.log('Form submitted:', formData);
    };

    return(
        <div>
            <h1>Orders</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
                </label>
                
                
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    
    )
}
# React Hook Form
```javascript
function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const signup = async (data) => {
    console.log("testing :: Signup :: signup :: data :: ", data); // remove before produnction
    setError("");
    try {
        const userData = await authService.createAccount(data);
        if (userData) {
            const userData = await authService.getCurrentUser();
            dispatch(authLogin(userData));
            navigate("/");
        }
    } catch (error) {
        setError(error);
        console.error("Signup :: signup :: error :: ", error);
    }
  }


  return (
    <div className="flex items-center justify-center">
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-[100px]">
                    <Logo width="100%" />
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                Already have an account?&nbsp;
                <Link
                    to="/login"
                    className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                    Sign In
                </Link>
            </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

            <form onSubmit={handleSubmit(signup)}>
                <div className='space-y-5'>
                    <Input 
                        label="Full Name: "
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: true
                        })}
                    />
                    <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address"
                            }
                        })}
                    />
                    <Input 
                        label="Password: "
                        placeholder="Enter your password"
                        type="password"
                        {...register("password", {
                            required: true
                        })}
                    />
                    <Button
                        type="submit"
                        className="w-full"
                    >Create Account</Button>
                </div>
            </form>
        </div>
    </div>
  )
}
```
## Explaination of React Hook Form
- Automatic Value Tracking: React Hook Form allows form inputs to be tracked automatically without using useState.
- register() Method: This function attaches necessary handlers (onChange, onBlur) and a ref to each input field.
- ref: The ref connects the input to the form, allowing React Hook Form to directly access the input's value from the DOM, bypassing the need for React state.
- No Re-renders: This eliminates the need for useState, preventing unnecessary re-renders on every input change.
- Efficient Form Management: React Hook Form simplifies validation and form submission by automatically collecting and managing the form values.


```javascript
<Controller 
            name={name || "content"}
            control={control}
            render={({field: {onChange}}) => (
                <Editor
                    initialValue={defaultValue}
                    init={{
                        initialValue: defaultValue,
                        height: 500,
                        menubar: true,
                        plugins: [
                            "image",
                            "advlist",
                            "autolink",
                            "lists",
                            "link",
                            "image",
                            "charmap",
                            "preview",
                            "anchor",
                            "searchreplace",
                            "visualblocks",
                            "code",
                            "fullscreen",
                            "insertdatetime",
                            "media",
                            "table",
                            "code",
                            "help",
                            "wordcount",
                            "anchor",
                        ],
                        toolbar:
                        "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                    }}
                    onEditorChange={onChange}
                />
            )}
        />
```
## Explaination
Using the Controller from React Hook Form, the TinyMCE editor is displayed as part of the form. The Controller connects the TinyMCE editor with the form's internal state.

### Behavior:
- <b style='color:#fcba03'>Displaying the Editor</b>:

    The TinyMCE editor is rendered in the form via the Controller component.
It is initialized with any default value (defaultValue) if provided.
- <b style='color:#fcba03'>Handling Changes:</b>

    When the user writes or modifies content in the TinyMCE editor, the changes are detected by the editor's onEditorChange event.
    This event calls the onChange function (provided by React Hook Form via the Controller).
    The onChange function updates the form's internal state with the new content.

- <b style='color:#fcba03'>In Simple Words:</b>

    Yes, when you type something inside the editor, the changes are reflected not only in the editor visually but also internally in the form's state. This connection ensures that the editor's value is always in sync with the form's state, which is essential for validation, submission, or other form-related tasks.
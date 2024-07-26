
### Project Setup and Installation

1. **Clone the Repository**:
   To clone the project from GitHub, run the following command in your terminal:
   ```bash
      git clone https://github.com/AnastasiaV0lkova/horizon-ui-chakra.git
   ```
   
2. **Install Dependencies:**:
   Install all necessary dependencies using npm:
   ```bash 
      npm install
   ```
   
3. **Running the Application:**:
   To start the application, use the following command:
   ```bash 
      npm start
   ```
   The application will be available at http://localhost:3000.

### Logging In

To log in to the application, follow these steps(used Horizon UI template for login page and a simple field check was added):

1. **Email and Password Fields**:
   - Users must enter their email address and password in the respective fields.

2. **Validation**:
   - **Empty Fields**: Ensure that both the email and password fields are not empty. If either field is left blank, display an error message prompting the user to fill in the required fields.
   - **Email Format**: Validate the email format using a regular expression to ensure it follows a standard email pattern (e.g., `example@domain.com`). If the email format is incorrect, display an error message.
   - **Password Length**: The password must be at least 8 characters long. If the password is shorter than 8 characters, display an error message indicating that the password must be at least 8 characters.

### Adding Thumbnails

To add thumbnails to the application, follow these steps:

1. **Upload image**:
   Click the "Upload image" button and choose image.

3. **Adding the Thumbnail**:
   Click the "Add Thumbnail" button. The thumbnail will be added to the display below.

### Animations

The application incorporates animations to enhance user experience. Here’s how they work:

1. Thumbnails animate into view with a scale and opacity effect when they are added

2. When hovering over a thumbnail, it scales up slightly for a visual effect.

3. When clicking on a thumbnail, it scales down slightly to provide feedback to the user.

# Top 3 project feature

- This is a fully Responsive website.
- Images are hosted from web server.
- Functionality: remaining credit hour, total price, total credit hour.

When you add one course multiple times then the system will show you a toast.<br> Also when the credit limit in the cart is exceeded, it will show a toast.

# How I managed the state in my Assignment
I used 3 state function in this project. For:
- cart
- totalHour
- totalPrice

cart state is handled through a function named 'handleCartButton'. The technique i used to pass props from child component to parent is called 'state lifting'. This is an amazing concept.
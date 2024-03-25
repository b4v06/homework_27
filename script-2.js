function library() {
    // Variables
    let exit = false;
    let menu;
    let id = 17;
    const userBase = [{ login: "admin1", password: "bruh1234" }, { login: "user22", password: "123456" }];
    const libraryCatalogue = [{ bookName: "Scott Pilgrim's Precious Little Life", bookAuthor: "Bryan Lee O'Malley's", bookYear: "2004", bookStatus: "available", bookId: 1 },
    { bookName: "Scott Pilgrim vs the World", bookAuthor: "Bryan Lee O'Malley's", bookYear: "2005", bookStatus: "available", bookId: 2 },
    { bookName: "Scott Pilgrim and the Infinite Sadness", bookAuthor: "Bryan Lee O'Malley's", bookYear: "2006", bookStatus: "available", bookId: 3 },
    { bookName: "Scott Pilgrim Gets it Together", bookAuthor: "Bryan Lee O'Malley's", bookYear: "2007", bookStatus: "available", bookId: 4 },
    { bookName: "Scott Pilgrim vs the Universe", bookAuthor: "Bryan Lee O'Malley's", bookYear: "2009", bookStatus: "available", bookId: 5 },
    { bookName: "Scott Pilgrim's Finest Hour", bookAuthor: "Bryan Lee O'Malley's", bookYear: "2010", bookStatus: "available", bookId: 6 },
    { bookName: "The Fellowship of the Ring", bookAuthor: "John Tolkien", bookYear: "1954", bookStatus: "taken", bookId: 7 },
    { bookName: "The Two Towers", bookAuthor: "John Tolkien", bookYear: "1954", bookStatus: "taken", bookId: 8 },
    { bookName: "The Return of the King", bookAuthor: "John Tolkien", bookYear: "1955", bookStatus: "taken", bookId: 9 },
    { bookName: "Harry Potter and the Philosopher's Stone", bookAuthor: "Joanne Rowling", bookYear: "1997", bookStatus: "available", bookId: 10 },
    { bookName: "Harry Potter and the Chamber of Secrets", bookAuthor: "Joanne Rowling", bookYear: "1998", bookStatus: "available", bookId: 11 },
    { bookName: "Harry Potter and the Prisoner of Azkaban", bookAuthor: "Joanne Rowling", bookYear: "1999", bookStatus: "available", bookId: 12 },
    { bookName: "Harry Potter and the Goblet of Fire", bookAuthor: "Joanne Rowling", bookYear: "2000", bookStatus: "available", bookId: 13 },
    { bookName: "Harry Potter and the Order of the Phoenix", bookAuthor: "Joanne Rowling", bookYear: "2003", bookStatus: "available", bookId: 14 },
    { bookName: "Harry Potter and the Half-Blood Prince", bookAuthor: "Joanne Rowling", bookYear: "2005", bookStatus: "available", bookId: 15 },
    { bookName: "Harry Potter and the Deathly Hallows", bookAuthor: "Joanne Rowling", bookYear: "2007", bookStatus: "available", bookId: 16 }];
    const rating = [{ userName: "prikol", ratingName: "Scott Pilgrim's Precious Little Life", ratingScore: 10 }, { userName: "prikol2", ratingName: "Scott Pilgrim's Precious Little Life", ratingScore: 9 }];
    const userListOfCompletedBooks = [];
    let userName;
    // Register
    function userRegister(userBase) {
        let login, password, repeatPassword;
        let proceed = false;
        while (proceed == false) {
            login = prompt("Please, enter you new login: \n(Login must be longer than 5 symbols amd shorter than 20 symbols)");
            for (let item of userBase) {
                if (login == item.login) {
                    alert("The username is taken!");
                    return null;
                }
            }
            if (login.length <= 5 || login.length >= 20) {
                alert("Your login is either too short or too long");
            } else {
                proceed = true;
            }
        }
        proceed = false;
        while (proceed == false) {
            password = prompt("Please, enter your password down below \n(Password must be longer than 5 symbols amd shorter than 20 symbols)");
            if (password.length <= 5 || password.length >= 20) {
                alert("Your password is either too short or too long");
            } else {
                proceed = true;
            }
        }
        proceed = false;
        while (proceed == false) {
            repeatPassword = prompt("Please, repeat your new passport:");
            if (repeatPassword !== password) {
                alert("Passwords do not match!");
            } else {
                proceed = true;
            }
        }
        userBase.push({ login, password });
        alert("Your account has been created! Now you can proceed to login screen!");
    }
    // Login
    function userLogin(userBase) {
        let loop = true;
        while (loop) {
            let login = prompt("Please, enter your login:");
            let password = prompt("Please, enter your password:");
            for (let item of userBase) {
                if (login == "admin1" && password == "bruh1234") {
                    alert("You've successfully logged in as an admin!");
                    return {
                        userType: "admin",
                        userName: "admin1"
                    };
                } else if (item.login == login && item.password == password) {
                    alert("You've successfully logged in!");
                    return {
                        userType: "user",
                        userName: login
                    }
                }
            }
            let userChoice = prompt("You've entered wrong login or password! \nDo you want to try again? \n1. Yes \n2. No");
            if (userChoice == "2") {
                return null;
            }
        }
    }
    // Add the book to the library
    function addBookToLibrary(libraryCatalogue, id) {
        let bookName = prompt("Enter the name of the new book");
        let bookAuthor = prompt("Enter the author of the new book");
        let bookYear = prompt("Enter whe did the book come out");
        let bookStatus = "available";
        let bookId = id;
        libraryCatalogue.push({ bookName, bookAuthor, bookYear, bookStatus, bookId });
    }
    // Remove the book from library
    function removeBookFromLibrary(libraryCatalogue, id) {
        console.log(libraryCatalogue);
        let deleteBook = prompt("Please, enter the id of the book that you want to delete: \n \n(For your convenience library catalogue is printed in console)");
        let count = 0;
        for (let i = 0; i < libraryCatalogue.length; i++) {
            if (libraryCatalogue[i].bookId == deleteBook) {
                libraryCatalogue.splice(i, 1);
                count++;
            }
        }
        if (count == 0) {
            alert("No books have been found with selected id");
        } else {
            alert("Book has been removed from the library!");
        }
    }
    // Check which book are taken at the moment
    function checkTakenBooks(libraryCatalogue) {
        for (let item of libraryCatalogue) {
            if (item.bookStatus == "taken") {
                console.log("Name: " + item.bookName);
                console.log("Author: " + item.bookAuthor);
                console.log("Year: " + item.bookYear);
                console.log("Status: " + item.bookStatus);
                console.log("ID: " + item.bookId);
                console.log("===========");
            }
        }
        alert("All taken books are printed in the console");
    }
    // Find books by author
    function findBooksByAuthor(libraryCatalogue) {
        let search = prompt("Please, enter either Name or Surname of the author:")
        for (let item of libraryCatalogue) {
            let temporary = item.bookAuthor.split(" ");
            console.log(temporary);
            for (let i = 0; i < temporary.length; i++) {
                if (search == temporary[i]) {
                    alert("Here is the book that I've found: \n1. Name: " + item.bookName + "\n2. Author: " + item.bookAuthor + "\n3. Year: " + item.bookYear + "\n4. Status: " + item.bookStatus + "\n5. ID: " + item.bookId + " (you need to remember it, if you want to take this book later)");
                }
            }
        }
    }
    // List of the available books
    function listOfAvailableBooks(libraryCatalogue) {
        for (let item of libraryCatalogue) {
            if (item.bookStatus == "available") {
                console.log("Name: " + item.bookName);
                console.log("Author: " + item.bookAuthor);
                console.log("Year: " + item.bookYear);
                console.log("Status: " + item.bookStatus);
                console.log("ID: " + item.bookId);
                console.log("===========");
            }
        }
        alert("All available books are printed in the console. If you want to take the book, you need to remember its id");
    }
    // Take the book
    function takeTheBook(libraryCatalogue) {
        let count = 0;
        let userChoice = prompt("Please enter the id of the book that you want to take:");
        for (let item of libraryCatalogue) {
            if (item.bookId == Number(userChoice) && item.bookStatus !== "taken") {
                item.bookStatus = "taken";
                count++;
            }
        }
        if (count == 0) {
            alert("You can't take the book with selected id");
        } else {
            alert("The book is now assigned to you, please, return it in 1 month notice!");
        }
    }
    // Find books by author
    function returnTheBook(libraryCatalogue) {
        let count = 0;
        let userChoice = prompt("Please enter the id of the book that you want to return:");
        for (let item of libraryCatalogue) {
            if (item.bookId == Number(userChoice) && item.bookStatus !== "available") {
                userListOfCompletedBooks.push(item.bookName);
                item.bookStatus = "taken";
                count++;
            }
        }
        if (count == 0) {
            alert("You can't return the book with selected id");
        } else {
            alert("You've successfully returned the book, thank you!");
        }
    }
    // Rate the book
    function rateTheBook(libraryCatalogue, userName, rating, userListOfCompletedBooks) {
        let count = 0;
        let ratingName = prompt("Please, enter the name of the book that you want to rate: \n(You need to enter book's name exactly as it is, without mistakes)");
        for (let item of userListOfCompletedBooks) {
            if (ratingName == item) {
                count++;
            }
        }
        for (let item of rating) {
            if (item.userName == userName && item.ratingName == ratingName) {
                alert("You have already rated this book!");
                return null;
            }
        }
        if (count > 0) {
            let ratingScore = prompt("And now, please rate the book on a scale from 0 to 10");
            if (isNaN(ratingScore)) {
                alert("You sly fox! You ought to write a number!")
            } else if (Number(ratingScore) < 0 || Number(ratingScore) > 10) {
                alert("As I said: on a scale from 1 to 10, is this really this hard?");
            } else {
                alert("Your review has been recorded, if it was good: thank you!");
                rating.push({ userName, ratingName, ratingScore });
            }
        } else {
            alert("You haven't read this book or you have misspelled its name!");
            return null;
        }
    }
    // Check average rating
    function getAverageRating(libraryCatalogue, rating) {
        let sum = 0, count = 0;
        let userRequest = prompt("Please enter the name of the book \n(You need to enter book's name exactly as it is, without mistakes)");
        for (let item of rating) {
            if (item.ratingName == userRequest) {
                sum += Number(item.ratingScore);
                count++;
            }
        }
        if (count > 0) {
            sum = sum / count;
            sum = sum.toFixed(2);
            alert("The average rating for selected book is " + sum + " out of 10");
        } else {
            alert("This book doesn't have a rating yet or you have misspelled its name");
        }
    }


    // Register and Login menu
    while (exit == false) {
        let userChoice = prompt("To work with the library you need an account \nTo create or login into existent account, choose the option below: \n1. Register \n2. Login \n3. Exit the program");
        if (userChoice == "1") {
            userRegister(userBase);
        } else if (userChoice == 2) {
            const user = userLogin(userBase);
            let userType = user.userType;
            userName = user.userName;
            if (userType == "admin") {
                menu = 1;
                exit = true;
            } else if (userType == "user") {
                menu = 2;
                exit = true;
            }
        } else if (userChoice == 3) {
            exit = true;
            alert("You've chosen to exit the library, have a nice day!")
        } else {
            alert("The answer that you've chosen doesn't correspond to any menu item. Please, try again!");
        }
    }
    exit = false;
    // Admin menu
    if (menu == 1) {
        while (exit == false) {
            let adminChoice = prompt("You are logged in as an admin: \n1. Add the book to the library \n2. Remove the book from library \n3. Check which book are taken at the moment \n4. Exit");
            if (adminChoice == "1") {
                addBookToLibrary(libraryCatalogue, id);
                id++;
            } else if (adminChoice == "2") {
                removeBookFromLibrary(libraryCatalogue, id);
            } else if (adminChoice == "3") {
                checkTakenBooks(libraryCatalogue);
            } else if (adminChoice == "4") {
                exit = true;
            } else {
                alert("The answer that you've chosen doesn't correspond to any menu item. Please, try again!");
            }
        }
    }
    // User menu
    if (menu == 2) {
        while (exit == false) {
            let userChoice = prompt("Menu: \n1. Find books by author \n2. List of the available books \n3. Take the book \n4. Return the book \n5. Rate the book \n6. Check book's average rating \n7. Exit");
            if (userChoice == 1) {
                findBooksByAuthor(libraryCatalogue);
            } else if (userChoice == 2) {
                listOfAvailableBooks(libraryCatalogue);
            } else if (userChoice == 3) {
                takeTheBook(libraryCatalogue);
            } else if (userChoice == 4) {
                returnTheBook(libraryCatalogue, userListOfCompletedBooks);
            } else if (userChoice == 5) {
                rateTheBook(libraryCatalogue, userName, rating, userListOfCompletedBooks);
            } else if (userChoice == 6) {
                getAverageRating(libraryCatalogue, rating);
            } else if (userChoice == 7) {
                alert("Goodbye, have a nice day!")
                exit = true;
            } else {
                alert("The answer that you've chosen doesn't correspond to any menu item. Please, try again!");
            }
        }
    }
}
library();
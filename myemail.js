console.log("\n");

var mailData = {
  mailboxes: [
    'Inbox',
    'Sent Items',
    'Deleted Items',
    'Important',
  ],
  inboxContents: [
    {
        messageIndex: 1,
        subject: 'Did you get my message?',
        sender: 'herbert@gmail.com',
        message: 'What time are we meeting for aardvarks?',
        status: 'Received',
    },
    {
        messageIndex: 2,
        subject: 'I received the blueberry bushes',
        sender: 'ralph@gmail.com',
        message: 'I got \'em, although why you would send me a bush via UPS is beyond me',
        status: 'Received',
    },
    {
        messageIndex: 3,
        subject: 'RE: creating useless yard work for days',
        sender: 'love.me.some.insoles@gmail.com',
        message: 'Don\'t. Just don\'t.',
        status: 'Received',
    },
  ],
  contacts: [
    {name: 'Bubba', email: 'bubba@intellect.com', lastMessage: "I am, therfore I think."},
    {name: 'Rasputina', email: 'slithering.viola@intellect.com', lastMessage: "Where did you get that howitzer, Vivyian?"},
    {name: 'Gertrude', email: 'hotKnittingGRrrl@intellect.com', lastMessage: "Who has two thumbs and just passed gas?!"},
    {name: 'Nermal', email: 'eatingexcrement@intellect.com', lastMessage: "I think I just dropped it like it was hot."},
  ],


  name: 'Gmail'
};

// Get a list of inbox names
  console.log("List of inbox names: ");
  console.log(mailData.mailboxes.join(", "));
  console.log(" ");
// Get a list of emails
console.log("List of contact emails: ");
  mailData.contacts.forEach(function(item, index) {
    console.log(item.email);
  });
  console.log(" ");

// Get the text of the second email in the visible list
console.log("Second contact email: ");
console.log(mailData.contacts[1].email);
console.log(" ");

// Mark third email as sent
mailData.inboxContents[2].status = "Sent";
console.log("Email statuses: ");
mailData.inboxContents.forEach(function(item, index) {
  console.log(item.status);
});
console.log(" ");


// Add a draft email to the drafts mailbox
mailData.inboxContents.push({
  messageIndex: 4,
  subject: 'This is a new email. Read me.',
  sender: 'gadsIhopeTHISworks@gmail.com',
  message: 'I am a new message. Look at me, I am a new message!',
  status: 'Received',
});

// Mark third email as sent
mailData.inboxContents[2].status = "Sent";
console.log("New email statuses: ");
mailData.inboxContents.forEach(function(item, index) {
  console.log(item.status);
});
console.log(" ");

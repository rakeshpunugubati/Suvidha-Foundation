
const { google } = require('googleapis');


const writeGoogle = async (data ,spreadsheetId ) => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), 
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'], 
  });
  
  const authClientObject = await auth.getClient();
  const googleSheetsInstance = google.sheets({
    version: "v4",
    auth: authClientObject,
  });

  await googleSheetsInstance.spreadsheets.values.append({
    spreadsheetId,
    range: 'Sheet1!A2',
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [data],
    },
  });
};

module.exports = { writeGoogle };

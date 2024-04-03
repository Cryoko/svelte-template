const apiKey = import.meta.env.DEEPL_API_KEY; // Replace 'your-api-key' with your actual API key

export const translate = async (text, source, target) => {
    const data = {
        text: [text],
        source_lang: source,
        target_lang: target
    };

    let thing = fetch('https://api-free.deepl.com/v2/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'DeepL-Auth-Key ' + apiKey
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Translated text:', data.translations[0].text);
        return data.translations[0].text
      })
      .catch(error => {
        console.error('Error:', error);
        return "Message could not be translated:\n" + text
      });
      return thing
}



#include <iostream>
#include <string>
#include <vector>
#include <map>
#include <algorithm>
#include <cmath>
#include <pthread.h>

using namespace std;

struct ThreadData {
    string input;
    map<char, int> frequency;
    map<char, string> codes;
    string encoded;
};

void calculateFrequency(const string& input, map<char, int>& frequency) {
    for (char c : input) {
        frequency[c]++;
    }
}

void sortFrequency(const map<char, int>& frequency, vector<pair<char, int>>& sorted) {
    for (const auto& pair : frequency) {
        sorted.push_back(pair);
    }
    sort(sorted.begin(), sorted.end(), [](const auto& a, const auto& b) {
        return a.second > b.second || (a.second == b.second && a.first > b.first);
    });
}

void generateShannon(vector<pair<char, int>>& sorted, map<char, string>& codes) {
    int total = 0;
    for (const auto& pair : sorted) {
        total += pair.second;
    }

    double cumulative = 0.0;
    for (const auto& pair : sorted) {
        double prob = static_cast<double>(pair.second) / total;
        cumulative += prob;
        int codeLength = ceil(-log2(prob));
        int codeValue = static_cast<int>((cumulative - prob) * (1 << codeLength));
        
        string code;
        for (int i = codeLength - 1; i >= 0; --i) {
            code += ((codeValue >> i) & 1) ? '1' : '0';
        }
        codes[pair.first] = code;
    }
}

void encodeMessage(const string& input, const map<char, string>& codes, string& encoded) {
    for (char c : input) {
        encoded += codes.at(c);
    }
}

void* processString(void* arg) {
    ThreadData* data = static_cast<ThreadData*>(arg);
    
    calculateFrequency(data->input, data->frequency);
    
    vector<pair<char, int>> sorted;
    sortFrequency(data->frequency, sorted);
    
    generateShannon(sorted, data->codes);
    
    encodeMessage(data->input, data->codes, data->encoded);
    
    return nullptr;
}

void printResults(const vector<ThreadData>& threadData) {
    for (const auto& data : threadData) {
        cout << "Message: " << data.input << endl;
        cout << "Alphabet: " << endl;
        
        vector<pair<char, int>> sorted;
        sortFrequency(data.frequency, sorted);
        
        for (const auto& pair : sorted) {
            cout << "Symbol: " << pair.first << ", Frequency: " << pair.second 
                 << ", Shannon code: " << data.codes.at(pair.first) << endl;
        }
        
        cout << "Encoded message: " << data.encoded << endl << endl;
    }
}

int main() {
    vector<string> inputs;
    string line;
    
    while (getline(cin, line) && !line.empty()) {
        inputs.push_back(line);
    }
    
    vector<pthread_t> threads(inputs.size());
    vector<ThreadData> threadData(inputs.size());
    
    for (size_t i = 0; i < inputs.size(); ++i) {
        threadData[i].input = inputs[i];
        pthread_create(&threads[i], nullptr, processString, &threadData[i]);
    }
    
    for (size_t i = 0; i < threads.size(); ++i) {
        pthread_join(threads[i], nullptr);
    }
    
    printResults(threadData);
    
    return 0;
}

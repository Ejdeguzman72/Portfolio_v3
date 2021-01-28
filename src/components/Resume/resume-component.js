import React from 'react';
import { Document } from 'react-pdf/dist/entry.webpack';
import { Page } from 'react-pdf/dist/entry.webpack';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import Resume from '../Resume/edgar_resume.pdf';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import { NavBarComponent } from '../navbar-component/navbar-component';

export class ResumeComponent extends React.Component {
    state = {
        numPages: null,
        pageNumber: 1
    }


    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div>
                <Helmet>
                    <title>Resume</title>
                </Helmet>
                <NavBarComponent />
                <div>
                    <Document
                        file={Resume}
                        onLoadSuccess={this.onDocucmentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} numPages={numPages} height={1000} />
                    </Document>
                </div>
                <FooterComponent />
            </div>
        )
    }
}
